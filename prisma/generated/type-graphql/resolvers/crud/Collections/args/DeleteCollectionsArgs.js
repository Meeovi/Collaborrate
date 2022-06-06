"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let DeleteCollectionsArgs = class DeleteCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], DeleteCollectionsArgs.prototype, "where", void 0);
DeleteCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCollectionsArgs);
exports.DeleteCollectionsArgs = DeleteCollectionsArgs;
