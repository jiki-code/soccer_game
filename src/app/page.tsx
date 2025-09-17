"use client";

import Image from "next/image";
import { BetCard } from "../components/ui/matchInfo";
import Arsenal from "../../public/assets/images/602.png";
import ManU from "../../public/assets/images/680.png";
import { Loading } from "@/components/ui/loading";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-[75vh] w-full flex items-center justify-center bg-slate-900 p-6">
          <div className="flex flex-row items-start gap-4">
            {/* Ví dụ hiển thị 2 đội bóng */}
           ssss
          </div>
        </div>
      )}
    </>
  );
}
