"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneThemesArgs_1 = require("./args/CreateOneThemesArgs");
const Themes_1 = require("../../../models/Themes");
const helpers_1 = require("../../../helpers");
let CreateOneThemesResolver = class CreateOneThemesResolver {
    async createOneThemes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Themes_1.Themes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneThemesArgs_1.CreateOneThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneThemesResolver.prototype, "createOneThemes", null);
CreateOneThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], CreateOneThemesResolver);
exports.CreateOneThemesResolver = CreateOneThemesResolver;
