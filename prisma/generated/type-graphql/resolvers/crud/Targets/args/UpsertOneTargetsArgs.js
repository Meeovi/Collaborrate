"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsCreateInput_1 = require("../../../inputs/TargetsCreateInput");
const TargetsUpdateInput_1 = require("../../../inputs/TargetsUpdateInput");
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let UpsertOneTargetsArgs = class UpsertOneTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], UpsertOneTargetsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsCreateInput_1.TargetsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsCreateInput_1.TargetsCreateInput)
], UpsertOneTargetsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsUpdateInput_1.TargetsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsUpdateInput_1.TargetsUpdateInput)
], UpsertOneTargetsArgs.prototype, "update", void 0);
UpsertOneTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTargetsArgs);
exports.UpsertOneTargetsArgs = UpsertOneTargetsArgs;
