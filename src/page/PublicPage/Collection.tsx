import React from "react";
import BreadCrumbs from "../../Components/PublicPage/BreadCrumbs";
import CollectionHero from "../../Components/PublicPage/Collection/CollectionHero";
import Filter from "../../Components/PublicPage/Collection/Filter";

const Collection: React.FC = () => {
  return (
    <div className="lg:w-[95%] mx-auto">
      <BreadCrumbs />
      <CollectionHero />
      <Filter />
    </div>
  );
};

export default Collection;
