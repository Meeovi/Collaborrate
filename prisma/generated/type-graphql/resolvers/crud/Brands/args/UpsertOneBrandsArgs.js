"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsCreateInput_1 = require("../../../inputs/BrandsCreateInput");
const BrandsUpdateInput_1 = require("../../../inputs/BrandsUpdateInput");
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
let UpsertOneBrandsArgs = class UpsertOneBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], UpsertOneBrandsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsCreateInput_1.BrandsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsCreateInput_1.BrandsCreateInput)
], UpsertOneBrandsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsUpdateInput_1.BrandsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsUpdateInput_1.BrandsUpdateInput)
], UpsertOneBrandsArgs.prototype, "update", void 0);
UpsertOneBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBrandsArgs);
exports.UpsertOneBrandsArgs = UpsertOneBrandsArgs;
