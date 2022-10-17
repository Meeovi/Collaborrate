"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let DeleteOneShipmentsArgs = class DeleteOneShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], DeleteOneShipmentsArgs.prototype, "where", void 0);
DeleteOneShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneShipmentsArgs);
exports.DeleteOneShipmentsArgs = DeleteOneShipmentsArgs;
