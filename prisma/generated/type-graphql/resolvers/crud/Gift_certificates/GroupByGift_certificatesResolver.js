"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByGift_certificatesArgs_1 = require("./args/GroupByGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const Gift_certificatesGroupBy_1 = require("../../outputs/Gift_certificatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByGift_certificatesResolver = class GroupByGift_certificatesResolver {
    async groupByGift_certificates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Gift_certificatesGroupBy_1.Gift_certificatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByGift_certificatesArgs_1.GroupByGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByGift_certificatesResolver.prototype, "groupByGift_certificates", null);
GroupByGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], GroupByGift_certificatesResolver);
exports.GroupByGift_certificatesResolver = GroupByGift_certificatesResolver;
