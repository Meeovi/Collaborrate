"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyGift_certificatesArgs_1 = require("./args/UpdateManyGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyGift_certificatesResolver = class UpdateManyGift_certificatesResolver {
    async updateManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyGift_certificatesArgs_1.UpdateManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyGift_certificatesResolver.prototype, "updateManyGift_certificates", null);
UpdateManyGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], UpdateManyGift_certificatesResolver);
exports.UpdateManyGift_certificatesResolver = UpdateManyGift_certificatesResolver;
