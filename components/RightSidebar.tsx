import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl fon-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
                {user.firstName} {user.lastName}
  
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
            <h2 className="header-2">
                My Banks
            </h2>
            <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" alt="plus" width={20} height={20}/>
            <div className="text-14 font-semibold text-gray-600">Add Bank</div>
            </Link>
        </div>
        { /*TODO: {banks?.length>0 &&(
            <div className="relative flec flex-1 flex-col"></div>
        )} */}
      </section>
    </aside>
  );
};

export default RightSidebar;
