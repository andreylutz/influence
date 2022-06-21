/* eslint-disable no-sequences */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OneCompanyCard from "./OneCompanyCard";
import OneUserCard from "./OneUserCard";

function AllUsersPage() {
  // const allUsers = [
  //   {
  //   avatar: "https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-59.jpg",
  //   userName: 'Nik',
  //   age: 25,
  //   location: "Спб",
  //   skill: "Прогер",
  //   id: 1,
  // },
  // {
  //   avatar: "https://placepic.ru/wp-content/uploads/2019/04/744667-male-lion-faces-wallpaper-2048x1423-for-meizu.jpg",
  //   userName: 'Alex',
  //   age: 25,
  //   location: "Саратов",
  //   skill: "Просто лев",
  //   id: 2,
  // },
  // ];
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.settings.list);
  console.log('dd=======>', allCategories);

  useEffect(() => {
    async function getAllCategories() {
      const reqServer = await fetch('http://localhost:4000/api/settings/allCategories');
      const resAllAbout = await reqServer.json();

      const action = {
        type: 'INIT_CATEGORIES',
        payload: resAllAbout,
      }
      dispatch(action);
    }
    getAllCategories();
  }, [dispatch]);

  return (
    <div className="allUsersBlock" >
      {
        allCategories.map((oneUser) => (
          // console.log('useeeeeeeeeeer',oneUser['User_about.name']),
          // console.log(oneUser.role)
          oneUser.role === 'user' ?
      (oneUser['User_about.name'] !== null && oneUser['User_about.name'] !== "") &&
      <OneUserCard key={oneUser.id} oneUser={oneUser} />
      :
      // console.log('compaaaaaany',oneUser['Company_about.companyName'])
      (oneUser['Company_about.companyName'] !==null && oneUser['Company_about.companyName'] !== "") &&
      <OneCompanyCard key={oneUser.id} oneCompany={oneUser} />
      ))
      }
    </div>
  );
}

export default AllUsersPage;
