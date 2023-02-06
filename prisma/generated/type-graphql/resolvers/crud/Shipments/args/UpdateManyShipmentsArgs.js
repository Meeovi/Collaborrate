"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsUpdateManyMutationInput_1 = require("../../../inputs/ShipmentsUpdateManyMutationInput");
const ShipmentsWhereInput_1 = require("../../../inputs/ShipmentsWhereInput");
let UpdateManyShipmentsArgs = class UpdateManyShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsUpdateManyMutationInput_1.ShipmentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsUpdateManyMutationInput_1.ShipmentsUpdateManyMutationInput)
], UpdateManyShipmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereInput_1.ShipmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereInput_1.ShipmentsWhereInput)
], UpdateManyShipmentsArgs.prototype, "where", void 0);
UpdateManyShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShipmentsArgs);
exports.UpdateManyShipmentsArgs = UpdateManyShipmentsArgs;
