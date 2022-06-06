"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
let DeleteThemesArgs = class DeleteThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], DeleteThemesArgs.prototype, "where", void 0);
DeleteThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteThemesArgs);
exports.DeleteThemesArgs = DeleteThemesArgs;
