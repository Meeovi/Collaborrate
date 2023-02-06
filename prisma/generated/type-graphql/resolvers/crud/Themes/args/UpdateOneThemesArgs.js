"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesUpdateInput_1 = require("../../../inputs/ThemesUpdateInput");
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
let UpdateOneThemesArgs = class UpdateOneThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesUpdateInput_1.ThemesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesUpdateInput_1.ThemesUpdateInput)
], UpdateOneThemesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], UpdateOneThemesArgs.prototype, "where", void 0);
UpdateOneThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneThemesArgs);
exports.UpdateOneThemesArgs = UpdateOneThemesArgs;
