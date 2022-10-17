"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigiboardOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DigiboardOrderByRelevanceFieldEnum;
(function (DigiboardOrderByRelevanceFieldEnum) {
    DigiboardOrderByRelevanceFieldEnum["name"] = "name";
    DigiboardOrderByRelevanceFieldEnum["board"] = "board";
    DigiboardOrderByRelevanceFieldEnum["student"] = "student";
    DigiboardOrderByRelevanceFieldEnum["course"] = "course";
})(DigiboardOrderByRelevanceFieldEnum = exports.DigiboardOrderByRelevanceFieldEnum || (exports.DigiboardOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(DigiboardOrderByRelevanceFieldEnum, {
    name: "DigiboardOrderByRelevanceFieldEnum",
    description: undefined,
});
