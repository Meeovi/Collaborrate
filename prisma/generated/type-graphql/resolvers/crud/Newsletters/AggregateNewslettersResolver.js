"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewslettersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNewslettersArgs_1 = require("./args/AggregateNewslettersArgs");
const Newsletters_1 = require("../../../models/Newsletters");
const AggregateNewsletters_1 = require("../../outputs/AggregateNewsletters");
const helpers_1 = require("../../../helpers");
let AggregateNewslettersResolver = class AggregateNewslettersResolver {
    async aggregateNewsletters(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNewsletters_1.AggregateNewsletters, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNewslettersArgs_1.AggregateNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateNewslettersResolver.prototype, "aggregateNewsletters", null);
AggregateNewslettersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletters_1.Newsletters)
], AggregateNewslettersResolver);
exports.AggregateNewslettersResolver = AggregateNewslettersResolver;
