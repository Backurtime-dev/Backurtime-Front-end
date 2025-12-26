"use client";
import React, { Fragment, useState } from "react";
import { Button } from "@/components/common";
import { DataTable, TableData } from "@/components/common/Tables";
import { Trash } from "@/components/icons";
import EmptyState from "../components/EmptyState";
import Dialog from "@/components/common/Dialog";
import { DeleteCoSubscriberContent } from "../components/DialogContents";

const CoSubscribersTable = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // Open and close dialog functions
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Fragment>
      <div className="grid w-full grid-cols-1">
        {true ? (
          <div className="no-scrollbar overflow-x-auto">
            <DataTable
              className="min-w-[653px]"
              table={CoSubscribersData(openDialog)}
              rowsSpace="12px"
            />
          </div>
        ) : (
          <EmptyState
            className="flex-row! [&>div>p]:text-white! [&>img]:size-[72px]!"
            text="No Co-subscribers yet"
          />
        )}
      </div>
      <Dialog isOpen={isDialogOpen} closeDialog={closeDialog}>
        {/* <DeleteCoSubscriberContent
          variant="delete-co-subscriber"
          onClick={() => {
            alert("Remain");
          }}
          onDelete={() => {
            alert("Delete Forever");
          }}
        /> */}
        {/* <DeleteCoSubscriberContent
          variant="remove-netflix-premium"
          onClick={() => {
            alert("Cancel");
          }}
          onDelete={() => {
            alert("Remove");
          }}
        /> */}
        <DeleteCoSubscriberContent
          variant="public-subscription"
          onClick={() => {
            alert("Make Public");
          }}
          onDelete={() => {
            alert("Cancel");
          }}
        />
      </Dialog>
    </Fragment>
  );
};

export default CoSubscribersTable;

// Pass openDialog as a parameter to CoSubscribersData
const CoSubscribersData = (openDialog: () => void): TableData => {
  return {
    id: "members-item",
    type: "members-item",
    title: "members item",
    columns: [
      { header: "User ID", accessorKey: "userId" },
      { header: "Profile", accessorKey: "profile" },
      { header: "Email", accessorKey: "email" },
      { header: "", accessorKey: "actions" },
    ],
    rows: [
      {
        id: "player-3",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          email: { value: "email@gmail.com" },
          actions: {
            value: "",
            render: () => (
              <div className="flex w-full items-center justify-end gap-4">
                <Button
                  onClick={openDialog}
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={<Trash size={20} className="[&_path]:stroke-white" />}
                />
              </div>
            ),
          },
        },
      },
      {
        id: "player-2",
        type: "members-item",
        cells: {
          userId: { value: 1 },
          profile: {
            value: "Alex Champion",
            profileImage: "/components/mock_user_avatar.png",
          },
          email: { value: "email@gmail.com" },
          actions: {
            value: "",
            render: () => (
              <div className="flex w-full items-center justify-end gap-4">
                <Button
                  onClick={openDialog}
                  className="group border-primitives-white_10 bg-primitives-white_10 size-9! min-h-auto! min-w-auto! shrink-0! rounded-full border backdrop-blur-xs"
                  icon={<Trash size={20} className="[&_path]:stroke-white" />}
                />
              </div>
            ),
          },
        },
      },
    ],
  };
};
