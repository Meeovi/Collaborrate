"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateGift_certificatesArgs_1 = require("./args/AggregateGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const AggregateGift_certificates_1 = require("../../outputs/AggregateGift_certificates");
const helpers_1 = require("../../../helpers");
let AggregateGift_certificatesResolver = class AggregateGift_certificatesResolver {
    async aggregateGift_certificates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateGift_certificates_1.AggregateGift_certificates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateGift_certificatesArgs_1.AggregateGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateGift_certificatesResolver.prototype, "aggregateGift_certificates", null);
AggregateGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], AggregateGift_certificatesResolver);
exports.AggregateGift_certificatesResolver = AggregateGift_certificatesResolver;
