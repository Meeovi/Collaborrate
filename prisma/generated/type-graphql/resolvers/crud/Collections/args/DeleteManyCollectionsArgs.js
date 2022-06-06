"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsWhereInput_1 = require("../../../inputs/CollectionsWhereInput");
let DeleteManyCollectionsArgs = class DeleteManyCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereInput_1.CollectionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsWhereInput_1.CollectionsWhereInput)
], DeleteManyCollectionsArgs.prototype, "where", void 0);
DeleteManyCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCollectionsArgs);
exports.DeleteManyCollectionsArgs = DeleteManyCollectionsArgs;
