"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyThemesArgs_1 = require("./args/CreateManyThemesArgs");
const Themes_1 = require("../../../models/Themes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyThemesResolver = class CreateManyThemesResolver {
    async createManyThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThemesArgs_1.CreateManyThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyThemesResolver.prototype, "createManyThemes", null);
CreateManyThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], CreateManyThemesResolver);
exports.CreateManyThemesResolver = CreateManyThemesResolver;
