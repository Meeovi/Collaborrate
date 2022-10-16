"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsCreateManyInput_1 = require("../../../inputs/CustomizationsCreateManyInput");
let CreateManyCustomizationsArgs = class CreateManyCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsCreateManyInput_1.CustomizationsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCustomizationsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCustomizationsArgs.prototype, "skipDuplicates", void 0);
CreateManyCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCustomizationsArgs);
exports.CreateManyCustomizationsArgs = CreateManyCustomizationsArgs;
