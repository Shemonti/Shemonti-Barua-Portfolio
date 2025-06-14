// import React from 'react';
// import styled from 'styled-components';

// const PStyle = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   font-size: 1.8rem;
//   line-height: 1.5em;
//   @media only screen and (max-width: 768px) {
//     font-size: 1.4rem;
//   }
// `;

// export default function PText({ children }) {
//   return (
//     <PStyle className="para">
//       <p>{children}</p>
//     </PStyle>
//   );
// }
// PText.js
import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.5em;
  color: ${(props) => props.color || 'var(--gray-1)'};
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children, color }) {
  return (
    <PStyle className="para" color={color}>
      <p>{children}</p>
    </PStyle>
  );
}
