// import extensionConfig from './extensionConfig';
import { Snippet } from "./generateSnippets";
import replaceOrRemoveReactImport from "./replaceOrRemoveReactImport";

const parseSnippetToBody = (snippet: Snippet) => {
    const snippetBody = replaceOrRemoveReactImport({
        prefix: snippet.prefix,
        body: snippet.body,
    });

    return snippetBody.split("\n");
};

export default parseSnippetToBody;
