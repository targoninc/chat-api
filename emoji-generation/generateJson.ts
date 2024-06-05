import fs from "fs";
import path from "path";
import {Reaction, ReactionGroup} from "../src/features/database/models";

const source = "emojis.json";
const target = "emojis_db.json";

const emojis = JSON.parse(fs.readFileSync(source, "utf8"));

const base = emojis.emojis;
const groupNames = Object.keys(base);
console.log(groupNames);

const groups = groupNames.map((groupName, index) => {
    return <ReactionGroup>{
        id: index,
        display: groupName,
    };
});

fs.writeFileSync("groups.json", JSON.stringify(groups, null, 2));

let reactions = [];
for (const group of groups) {
    const groupContentNames = Object.keys(base[group.display]);
    for (const contentName of groupContentNames) {
        const content = base[group.display][contentName];
        for (const reaction of content) {
            reactions.push(<Reaction>{
                groupId: group.id,
                content: reaction.emoji,
                identifier: reaction.name
                    .replaceAll(" ", "_")
                    .replaceAll(":", "")
                    .toLowerCase(),
            });
        }
    }
}

fs.writeFileSync(target, JSON.stringify(reactions, null, 2));