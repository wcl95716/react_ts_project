import { Project, SyntaxKind } from 'ts-morph';

const code = `
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';

// Comment for VideoList
export const VideoList: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
      </div>
    </>
  );
};

// Comment for someVar
const someVar = 'test';

// Comment for SomeClass
class SomeClass {}

//  Comment for SomeEnum
function someFunction() {}
`;

const project = new Project();
const sourceFile = project.createSourceFile('temp.tsx', code);

const mainKinds = [
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.VariableStatement,
  SyntaxKind.ClassDeclaration,
  SyntaxKind.EnumDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.TypeAliasDeclaration,
];

for (const kind of mainKinds) {
  const nodes = sourceFile.getDescendantsOfKind(kind);
  nodes.forEach(node => {
      const leadingComments = node.getLeadingCommentRanges();
      leadingComments.forEach(comment => {
          console.log(`Comment for ${node.getKindName()}:`);
          console.log(comment.getText());
          console.log('-----------------------------------');
      });
  });
}
