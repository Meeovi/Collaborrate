"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsCreateInput_1 = require("../../../inputs/ShipmentsCreateInput");
const ShipmentsUpdateInput_1 = require("../../../inputs/ShipmentsUpdateInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let UpsertShipmentsArgs = class UpsertShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], UpsertShipmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCreateInput_1.ShipmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsCreateInput_1.ShipmentsCreateInput)
], UpsertShipmentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsUpdateInput_1.ShipmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsUpdateInput_1.ShipmentsUpdateInput)
], UpsertShipmentsArgs.prototype, "update", void 0);
UpsertShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertShipmentsArgs);
exports.UpsertShipmentsArgs = UpsertShipmentsArgs;
