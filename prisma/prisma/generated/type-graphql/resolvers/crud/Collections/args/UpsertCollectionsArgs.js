"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsCreateInput_1 = require("../../../inputs/CollectionsCreateInput");
const CollectionsUpdateInput_1 = require("../../../inputs/CollectionsUpdateInput");
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
let UpsertCollectionsArgs = class UpsertCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], UpsertCollectionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsCreateInput_1.CollectionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsCreateInput_1.CollectionsCreateInput)
], UpsertCollectionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsUpdateInput_1.CollectionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CollectionsUpdateInput_1.CollectionsUpdateInput)
], UpsertCollectionsArgs.prototype, "update", void 0);
UpsertCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCollectionsArgs);
exports.UpsertCollectionsArgs = UpsertCollectionsArgs;
