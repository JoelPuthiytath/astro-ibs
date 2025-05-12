import React from "react";

export function formatAnswerAndRender(text) {
  const sentences = text.split("\n");
  const urlRegex    = /(https?:\/\/[^\s)]+)/g;
  const emailRegex  = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  const phoneRegex  =
    /(\+\d{1,4}\s?)?(\d{10,14}|\(\d{3}\)\s?\d{3}[-.\s]?\d{4}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/g;

  // Helper to split a sentence into text and link tokens
  const tokenize = (sentence) => {
    const tokens = [];
    let lastIndex = 0;

    // Combined regex to find any link-like pattern
    const combined = new RegExp(
      [urlRegex.source, emailRegex.source, phoneRegex.source].join("|"),
      "gi"
    );

    sentence.replace(combined, (match, ...args) => {
      const matchIndex = args[args.length - 2];
      if (matchIndex > lastIndex) {
        tokens.push({ type: "text", value: sentence.slice(lastIndex, matchIndex) });
      }

      let type, href;
      if (urlRegex.test(match)) {
        type = "url";
        href = match;
      } else if (emailRegex.test(match)) {
        type = "email";
        href = `mailto:${match}`;
      } else {
        type = "phone";
        href = `tel:${match.replace(/\D/g, "")}`;
      }

      tokens.push({ type, value: match, href });
      lastIndex = matchIndex + match.length;
    });

    if (lastIndex < sentence.length) {
      tokens.push({ type: "text", value: sentence.slice(lastIndex) });
    }

    return tokens;
  };

  return sentences.map((sentence, idx) => {
    const tokens = tokenize(sentence);

    // Decide how many <br />s to insert after this sentence
    const breaks = (idx % 2 === 1) ? [<br key="br1"/>, <br key="br2"/>] : [<br key="br"/>];

    return (
      <React.Fragment key={idx}>
        {tokens.map((tok, i) => {
          if (tok.type === "text") {
            return <span key={i}>{tok.value}</span>;
          } else {
            // link token
            const cls =
              tok.type === "url"   ? "product-link" :
              tok.type === "email" ? "email-link"   :
              tok.type === "phone" ? "phone-link"   : "";
            return (
              <a
                key={i}
                href={tok.href}
                className={cls}
                target={tok.type === "url" ? "_blank" : undefined}
                rel={tok.type === "url" ? "noopener noreferrer" : undefined}
              >
                {tok.value}
              </a>
            );
          }
        })}
        {breaks}
      </React.Fragment>
    );
  });
}
