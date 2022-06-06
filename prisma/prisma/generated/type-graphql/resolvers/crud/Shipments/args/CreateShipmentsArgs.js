"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsCreateInput_1 = require("../../../inputs/ShipmentsCreateInput");
let CreateShipmentsArgs = class CreateShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCreateInput_1.ShipmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsCreateInput_1.ShipmentsCreateInput)
], CreateShipmentsArgs.prototype, "data", void 0);
CreateShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateShipmentsArgs);
exports.CreateShipmentsArgs = CreateShipmentsArgs;
