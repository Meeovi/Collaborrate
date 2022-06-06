"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsUpdateInput_1 = require("../../../inputs/ShipmentsUpdateInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let UpdateShipmentsArgs = class UpdateShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsUpdateInput_1.ShipmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsUpdateInput_1.ShipmentsUpdateInput)
], UpdateShipmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], UpdateShipmentsArgs.prototype, "where", void 0);
UpdateShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateShipmentsArgs);
exports.UpdateShipmentsArgs = UpdateShipmentsArgs;
