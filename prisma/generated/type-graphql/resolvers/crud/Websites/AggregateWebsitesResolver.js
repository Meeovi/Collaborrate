"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWebsitesArgs_1 = require("./args/AggregateWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const AggregateWebsites_1 = require("../../outputs/AggregateWebsites");
const helpers_1 = require("../../../helpers");
let AggregateWebsitesResolver = class AggregateWebsitesResolver {
    async aggregateWebsites(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWebsites_1.AggregateWebsites, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWebsitesArgs_1.AggregateWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateWebsitesResolver.prototype, "aggregateWebsites", null);
AggregateWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], AggregateWebsitesResolver);
exports.AggregateWebsitesResolver = AggregateWebsitesResolver;
