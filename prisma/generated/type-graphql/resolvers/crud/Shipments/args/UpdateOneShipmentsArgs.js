"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsUpdateInput_1 = require("../../../inputs/ShipmentsUpdateInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let UpdateOneShipmentsArgs = class UpdateOneShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsUpdateInput_1.ShipmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsUpdateInput_1.ShipmentsUpdateInput)
], UpdateOneShipmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], UpdateOneShipmentsArgs.prototype, "where", void 0);
UpdateOneShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneShipmentsArgs);
exports.UpdateOneShipmentsArgs = UpdateOneShipmentsArgs;
