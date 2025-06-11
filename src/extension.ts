import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.classNameExtractor', () => {
		const editor = vscode.window.activeTextEditor;
		
		if (!editor) { return; }

		const text              = editor.document.getText();
		const classNamesMatcher = /class\s *= \s*"(?<classnames>[^"]+)"/gm;
		const classNames       	= [...text.matchAll(classNamesMatcher)].map(m => m.groups?.classnames.split(/\s+/)).flat();
		const uniqueClassNames 	= Array.from(new Set(classNames)).sort() as string[];

		vscode.window.showQuickPick(uniqueClassNames, { placeHolder: 'Class names in this file:' });
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
