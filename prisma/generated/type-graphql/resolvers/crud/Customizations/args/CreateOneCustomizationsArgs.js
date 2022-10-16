"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsCreateInput_1 = require("../../../inputs/CustomizationsCreateInput");
let CreateOneCustomizationsArgs = class CreateOneCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsCreateInput_1.CustomizationsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomizationsCreateInput_1.CustomizationsCreateInput)
], CreateOneCustomizationsArgs.prototype, "data", void 0);
CreateOneCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCustomizationsArgs);
exports.CreateOneCustomizationsArgs = CreateOneCustomizationsArgs;
