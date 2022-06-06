"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsCreateInput_1 = require("../../../inputs/ShopsCreateInput");
let CreateShopsArgs = class CreateShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsCreateInput_1.ShopsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsCreateInput_1.ShopsCreateInput)
], CreateShopsArgs.prototype, "data", void 0);
CreateShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateShopsArgs);
exports.CreateShopsArgs = CreateShopsArgs;
