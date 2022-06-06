"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateGift_certificatesArgs_1 = require("./args/UpdateGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const helpers_1 = require("../../../helpers");
let UpdateGift_certificatesResolver = class UpdateGift_certificatesResolver {
    async updateGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Gift_certificates_1.Gift_certificates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateGift_certificatesArgs_1.UpdateGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateGift_certificatesResolver.prototype, "updateGift_certificates", null);
UpdateGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], UpdateGift_certificatesResolver);
exports.UpdateGift_certificatesResolver = UpdateGift_certificatesResolver;
