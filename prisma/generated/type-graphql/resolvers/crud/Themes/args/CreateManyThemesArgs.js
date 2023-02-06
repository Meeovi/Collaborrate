"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesCreateManyInput_1 = require("../../../inputs/ThemesCreateManyInput");
let CreateManyThemesArgs = class CreateManyThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesCreateManyInput_1.ThemesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyThemesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyThemesArgs.prototype, "skipDuplicates", void 0);
CreateManyThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyThemesArgs);
exports.CreateManyThemesArgs = CreateManyThemesArgs;
