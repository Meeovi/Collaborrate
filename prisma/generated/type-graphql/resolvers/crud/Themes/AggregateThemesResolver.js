"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThemesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateThemesArgs_1 = require("./args/AggregateThemesArgs");
const Themes_1 = require("../../../models/Themes");
const AggregateThemes_1 = require("../../outputs/AggregateThemes");
const helpers_1 = require("../../../helpers");
let AggregateThemesResolver = class AggregateThemesResolver {
    async aggregateThemes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).themes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThemes_1.AggregateThemes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThemesArgs_1.AggregateThemesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThemesResolver.prototype, "aggregateThemes", null);
AggregateThemesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Themes_1.Themes)
], AggregateThemesResolver);
exports.AggregateThemesResolver = AggregateThemesResolver;
