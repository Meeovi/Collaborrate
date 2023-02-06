"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let DeleteOneCollectionsArgs = class DeleteOneCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], DeleteOneCollectionsArgs.prototype, "where", void 0);
DeleteOneCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCollectionsArgs);
exports.DeleteOneCollectionsArgs = DeleteOneCollectionsArgs;
