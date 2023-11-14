const vscode = require("vscode");
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "unity-replace-bad-char" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "unity-replace-bad-char.u-replaceBadChar",
    function () {
      const textEditor = vscode.window.activeTextEditor;
      if (!textEditor) {
        vscode.window.showErrorMessage("Editor Does Not Exist");
        return;
      }
      var m;
      let fullText = textEditor.document.getText();
      const regex = /[“”]/gm; // 'g' flag is for global search & 'm' flag is for multiline.
      const regex2 = /[‘’']/gm;

      let textReplace = fullText.replace(regex, `"`);
      let textReplace2 = textReplace.replace(regex2, `'`);

      //Creating a new range with startLine, startCharacter & endLine, endCharacter.
      let invalidRange = new vscode.Range(
        0,
        0,
        textEditor.document.lineCount,
        0
      );

      // To ensure that above range is completely contained in this document.
      let validFullRange = textEditor.document.validateRange(invalidRange);

      while ((m = regex.exec(fullText)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        textEditor.edit((editBuilder) => {
          editBuilder.replace(validFullRange, textReplace2);
        });
      }

      vscode.window.showInformationMessage(
        "Finish replace bad unity character!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}
module.exports = {
  activate,
  deactivate,
};
