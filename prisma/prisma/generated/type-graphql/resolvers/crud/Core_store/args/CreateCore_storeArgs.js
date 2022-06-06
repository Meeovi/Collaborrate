"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeCreateInput_1 = require("../../../inputs/Core_storeCreateInput");
let CreateCore_storeArgs = class CreateCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Core_storeCreateInput_1.Core_storeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Core_storeCreateInput_1.Core_storeCreateInput)
], CreateCore_storeArgs.prototype, "data", void 0);
CreateCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCore_storeArgs);
exports.CreateCore_storeArgs = CreateCore_storeArgs;
