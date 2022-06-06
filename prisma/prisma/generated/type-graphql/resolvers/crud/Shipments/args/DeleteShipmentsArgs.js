"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let DeleteShipmentsArgs = class DeleteShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], DeleteShipmentsArgs.prototype, "where", void 0);
DeleteShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteShipmentsArgs);
exports.DeleteShipmentsArgs = DeleteShipmentsArgs;
