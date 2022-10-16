"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGift_certificatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyGift_certificatesArgs_1 = require("./args/DeleteManyGift_certificatesArgs");
const Gift_certificates_1 = require("../../../models/Gift_certificates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyGift_certificatesResolver = class DeleteManyGift_certificatesResolver {
    async deleteManyGift_certificates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).gift_certificates.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyGift_certificatesArgs_1.DeleteManyGift_certificatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyGift_certificatesResolver.prototype, "deleteManyGift_certificates", null);
DeleteManyGift_certificatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Gift_certificates_1.Gift_certificates)
], DeleteManyGift_certificatesResolver);
exports.DeleteManyGift_certificatesResolver = DeleteManyGift_certificatesResolver;
