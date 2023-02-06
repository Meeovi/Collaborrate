"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesWhereInput_1 = require("../../../inputs/ThemesWhereInput");
let DeleteManyThemesArgs = class DeleteManyThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], DeleteManyThemesArgs.prototype, "where", void 0);
DeleteManyThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyThemesArgs);
exports.DeleteManyThemesArgs = DeleteManyThemesArgs;
