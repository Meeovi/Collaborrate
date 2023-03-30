"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsCreateInput_1 = require("../../../inputs/ShipmentsCreateInput");
let CreateOneShipmentsArgs = class CreateOneShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCreateInput_1.ShipmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsCreateInput_1.ShipmentsCreateInput)
], CreateOneShipmentsArgs.prototype, "data", void 0);
CreateOneShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneShipmentsArgs);
exports.CreateOneShipmentsArgs = CreateOneShipmentsArgs;
