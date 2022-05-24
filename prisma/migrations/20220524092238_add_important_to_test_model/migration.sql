-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_testModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comment" TEXT NOT NULL,
    "important" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_testModel" ("comment", "id") SELECT "comment", "id" FROM "testModel";
DROP TABLE "testModel";
ALTER TABLE "new_testModel" RENAME TO "testModel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
