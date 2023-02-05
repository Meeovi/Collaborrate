"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesCreateInput_1 = require("../../../inputs/ZonesCreateInput");
const ZonesUpdateInput_1 = require("../../../inputs/ZonesUpdateInput");
const ZonesWhereUniqueInput_1 = require("../../../inputs/ZonesWhereUniqueInput");
let UpsertOneZonesArgs = class UpsertOneZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesWhereUniqueInput_1.ZonesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesWhereUniqueInput_1.ZonesWhereUniqueInput)
], UpsertOneZonesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesCreateInput_1.ZonesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesCreateInput_1.ZonesCreateInput)
], UpsertOneZonesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ZonesUpdateInput_1.ZonesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ZonesUpdateInput_1.ZonesUpdateInput)
], UpsertOneZonesArgs.prototype, "update", void 0);
UpsertOneZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneZonesArgs);
exports.UpsertOneZonesArgs = UpsertOneZonesArgs;
