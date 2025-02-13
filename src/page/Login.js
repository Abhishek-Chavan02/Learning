// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { saveUserInfo, updateName, updatePassword } from "../redux/userSlice";
// import Profile from "./Profile";
// import { stopStartLoading } from "../redux/appSlice";

// export default function Login() {
//   const userState = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   console.log(userState);

  

//   const _onClick = () => {
//     dispatch(stopStartLoading(false));

//     const userInfo = {
//       name: userState.name,
//       password: userState.password,
//     };
   
   
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <input
//         value={userState.name}
//         placeholder="Name"
//         onChange={(e) => {
//           dispatch(updateName(e.target.value));
//         }}
//       />
//       <br /> <br />
//       <input
//         value={userState?.password}
//         onChange={(e) => {
//           dispatch(updatePassword(e.target.value));
//         }}
//         placeholder="password"
//       />
//       <br /> <br />
//       <input type="button" onClick={_onClick} value="Save" />
//       <p>{userState.name}</p>
//       <Profile />
//     </div>
//   );
// }
