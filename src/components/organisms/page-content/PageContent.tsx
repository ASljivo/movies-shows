import { FC } from "react";
import { Tabs } from "components/molecules/tabs/Tabs";
import Search from "components/atoms/search/Search";
import Pagination from "components/atoms/pagggination/Paggination";
import { CardList } from "components/atoms/card-list/CardList";
import { PageContent as Props } from "models/PageContent";

export const PageContent: FC<Props> = ({
  query,
  setQuery,
  currentPage,
  setCurrentPage,
  data,
  dataLength,
  handleSearch,
  hasPaggination,
}) => {
  return (
    <>
      <Tabs />
      <Search value={query} setValue={setQuery} onSearch={handleSearch} />
      <section>
        <CardList data={data} />

        {hasPaggination && (
          <Pagination
            nPages={dataLength}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </>
  );
};
