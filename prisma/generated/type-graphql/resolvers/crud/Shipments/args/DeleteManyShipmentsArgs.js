"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsWhereInput_1 = require("../../../inputs/ShipmentsWhereInput");
let DeleteManyShipmentsArgs = class DeleteManyShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereInput_1.ShipmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereInput_1.ShipmentsWhereInput)
], DeleteManyShipmentsArgs.prototype, "where", void 0);
DeleteManyShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShipmentsArgs);
exports.DeleteManyShipmentsArgs = DeleteManyShipmentsArgs;
