"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateInput_1 = require("../../../inputs/ThemesCreateInput");
let CreateThemesArgs = class CreateThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateInput_1.ThemesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesCreateInput_1.ThemesCreateInput)
], CreateThemesArgs.prototype, "data", void 0);
CreateThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateThemesArgs);
exports.CreateThemesArgs = CreateThemesArgs;
