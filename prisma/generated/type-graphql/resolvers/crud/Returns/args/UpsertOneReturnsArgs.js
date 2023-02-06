"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReturnsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReturnsCreateInput_1 = require("../../../inputs/ReturnsCreateInput");
const ReturnsUpdateInput_1 = require("../../../inputs/ReturnsUpdateInput");
const ReturnsWhereUniqueInput_1 = require("../../../inputs/ReturnsWhereUniqueInput");
let UpsertOneReturnsArgs = class UpsertOneReturnsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsWhereUniqueInput_1.ReturnsWhereUniqueInput)
], UpsertOneReturnsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsCreateInput_1.ReturnsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsCreateInput_1.ReturnsCreateInput)
], UpsertOneReturnsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReturnsUpdateInput_1.ReturnsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReturnsUpdateInput_1.ReturnsUpdateInput)
], UpsertOneReturnsArgs.prototype, "update", void 0);
UpsertOneReturnsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReturnsArgs);
exports.UpsertOneReturnsArgs = UpsertOneReturnsArgs;
