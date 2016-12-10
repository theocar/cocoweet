/* @flow */
import React, {Element} from 'react';
import logo from 'app/view/assets/128.png';
import styleSpinner from 'app/view/spinner.less';
import style from 'app/view/connect.less';

const Spinner = (): Element<*> => (
  <div className={styleSpinner.spinner}>
    <div className={styleSpinner.cube1} />
    <div className={styleSpinner.cube2} />
  </div>
);

/* eslint-disable max-len */
const TwitterIcon = (): Element<*> => (
  <svg viewBox="0 0 56.693 56.693">
    <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
  </svg>
);
/* eslint-enable max-len */

type ConnectType = {
  loading: boolean,
  onConnect: Function
};
export default (props: ConnectType): Element<*> => (
  <div className={style.connect}>
    <img alt="logo" src={logo} />
    {props.loading ? <Spinner /> :
      <button onClick={props.onConnect}>
        <TwitterIcon />
        Signin with Twitter
      </button>
    }
  </div>
);
