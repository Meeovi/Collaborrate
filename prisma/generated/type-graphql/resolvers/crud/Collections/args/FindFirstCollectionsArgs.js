"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsOrderByWithRelationInput_1 = require("../../../inputs/CollectionsOrderByWithRelationInput");
const CollectionsWhereInput_1 = require("../../../inputs/CollectionsWhereInput");
const CollectionsWhereUniqueInput_1 = require("../../../inputs/CollectionsWhereUniqueInput");
const CollectionsScalarFieldEnum_1 = require("../../../../enums/CollectionsScalarFieldEnum");
let FindFirstCollectionsArgs = class FindFirstCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereInput_1.CollectionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsWhereInput_1.CollectionsWhereInput)
], FindFirstCollectionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsOrderByWithRelationInput_1.CollectionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCollectionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsWhereUniqueInput_1.CollectionsWhereUniqueInput)
], FindFirstCollectionsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCollectionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCollectionsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsScalarFieldEnum_1.CollectionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCollectionsArgs.prototype, "distinct", void 0);
FindFirstCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCollectionsArgs);
exports.FindFirstCollectionsArgs = FindFirstCollectionsArgs;
